import * as tf from "@tensorflow/tfjs";
import fs from "fs"; // Node.js File System module
import Papa from "papaparse"; // PapaParse library
import path from "path";

const folderPath = "dataset"; // Your dataset folder
const savePath = "file://./saved_model";

let data_files = fs
  .readdirSync(folderPath)
  .filter((file) => file.endsWith(".csv"));

// Function to read and parse the CSV file
function readCSV(filePath) {
  const file = fs.readFileSync(filePath, "utf8"); // Read file contents

  let data = undefined;

  // Parse the CSV data
  Papa.parse(file, {
    header: true, // Treat the first row as header
    dynamicTyping: true, // Automatically cast numbers and booleans
    complete: (result) => {
      data = result.data;
    },
    error: (err) => {
      console.error("Error parsing CSV:", err);
    },
  });

  return data;
}

let dataset_all = [];
let input_data = [];
let output_data = [];

// Adding data to Dataset_all
for (let i = 0; i < data_files.length; i++) {
  let data = readCSV(`${folderPath}/${data_files[i]}`);

  // Extract only the relevant fields (GPA, CET, STRAND, COURSE)
  // let data_data = data.map((item) => ({
  //   GPA: item.GPA,
  //   CET: item.CET,
  //   STRAND: item.STRAND,
  //   COURSE: item.COURSE,
  // }));

  let data_y = {
    GPA: data[0].GPA,
    CET: data[0].CET,
    STRAND: data[0].STRAND,
    COURSE: data[0].COURSE,
  };

  // dataset_all.push(...data_data);
  dataset_all.push(data_y);
}

input_data = dataset_all;
// Fix issues like anomalya with the numbers and strings
for (let i = 0; i < dataset_all.length; i++) {
  // GPA
  input_data[i].GPA =
    typeof input_data[i].GPA !== "number" ? 85 : parseInt(dataset_all[i].GPA);

  // CET
  input_data[i].CET =
    typeof input_data[i].CET !== "number"
      ? 85
      : Math.round(dataset_all[i].CET * 10) / 10;

  // STRAND
  if (input_data[i].STRAND === undefined || input_data[i].STRAND === null) {
    input_data[i].STRAND = "HUMSS";
  } else {
    input_data[i].STRAND = input_data[i].STRAND.replace(/\s+/g, "-").trim();
  }

  // COURSE
  if (input_data[i].COURSE === undefined || input_data[i].COURSE === null) {
    input_data[i].COURSE = "BACHELOR OF ARTS IN BROADCASTING";
  } else {
    input_data[i].COURSE = input_data[i].COURSE.trim();
  }
}

// // Unique STRAND
const unique_stands = [...new Set(input_data.map((item) => item.STRAND))];

// // Unique COURSE
const unique_course = [...new Set(input_data.map((item) => item.COURSE))];

// Mapping STRAND to numerical
const strandToLabel = {};
unique_stands.forEach((strand, index) => {
  strandToLabel[strand] = index + 1; // Assigning numerical labels starting from 1
});

// Mapping COURSE to numerical
const courseToLabel = {};
unique_course.forEach((course, index) => {
  courseToLabel[course] = index + 1; // Assigning numerical labels starting from 1
});

// Replace STRAND values with their numeric labels
input_data = input_data.map((item) => ({
  GPA: item.GPA,
  CET: item.CET,
  STRAND: strandToLabel[item.STRAND], // Replace with a numeric label
  COURSE: item.COURSE,
}));
// Replace COURSE values with their numeric labels
input_data = input_data.map((item) => ({
  GPA: item.GPA,
  CET: item.CET,
  STRAND: item.STRAND, // Replace with a numeric label
  COURSE: courseToLabel[item.COURSE],
}));

//
// PREPARING DATA FOR INPUT AND OUTPUT
//
output_data = input_data.map((item) => item.COURSE);
input_data = input_data.map(({ GPA, CET, STRAND }) => [GPA, CET, STRAND]);

//
//
//

// Convert input data to tensor
let inputTensor = tf.tensor2d(input_data);

// Convert output data to tensor and one-hot encode the labels
const numClasses = Math.max(...output_data) + 1; // Assuming integer labels starting from 0
let oneHotLabels = output_data.map((label) => {
  let oneHot = Array(numClasses).fill(0);
  oneHot[label] = 1;
  return oneHot;
});
let outputTensor = tf.tensor2d(oneHotLabels);

// Define the model
const model = tf.sequential();

// Add the input layer (3 input features)
model.add(
  tf.layers.dense({
    units: 64, // Number of neurons in the first hidden layer
    activation: "relu",
    inputShape: [3], // 3 features: GPA, CET, STRAND
  })
);

// Add the output layer with softmax activation
model.add(
  tf.layers.dense({
    units: numClasses, // Number of courses (classes)
    activation: "softmax", // Softmax for multi-class classification
  })
);

// Compile the model
model.compile({
  optimizer: "adam", // Optimizer
  loss: "categoricalCrossentropy", // Loss function for multi-class classification
  metrics: ["accuracy"], // Metrics to track during training
});

// Train the model
async function trainModel() {
  const history = await model.fit(inputTensor, outputTensor, {
    epochs: 100, // Number of epochs
    batchSize: 32, // Batch size for training
    validationSplit: 0.2, // Split for validation (20%)
    shuffle: true, // Shuffle data during training
  });

  console.log("✅ Training complete. Saving model...");

  // Save the model locally in a folder (creates a JSON + BIN file)
  await model.save(savePath);

  console.log(`✅ Model saved at: ./saved_model`);

  console.log("Training complete");
  console.log("History:", history);
}

// Call the trainModel function to start training
trainModel();
