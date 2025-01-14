import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Navigator from "../components/Navigator";

export default function CoursePrediction() {
  return (
    <>
      {/* HEADER */}
      <div className={`header min-h-screen flex flex-col `}>
        {/* NAVIGATOR */}
        <Navigator />

        {/* content */}
        <div className="w-full px-5 md:px-10 py-10 flex-grow flex flex-col text-black">
          <div className="border border-black py-10 px-5 rounded-xl bg-slate-100 ">
            <h1 className="uppercase font-bold text-2xl text-center mb-5 md:my-16">
              Get your course recommended!
            </h1>

            <div className="flex flex-wrap gap-10 justify-center">
              {/* Personal Information */}
              <div className="max-w-80">
                <h2 className="font-semibold text-lg mb-3">
                  Personal Information
                </h2>

                <div className="flex flex-col gap-2">
                  {/* First name */}
                  <div className="">
                    <Label htmlFor={"first_name"} required>
                      First name
                    </Label>
                    <Input
                      type={"text"}
                      name={"first_name"}
                      id={"first_name"}
                    />
                  </div>
                  {/* Last name */}
                  <div className="">
                    <Label htmlFor={"last_name"} required>
                      Last name
                    </Label>
                    <Input type={"text"} name={"last_name"} id={"last_name"} />
                  </div>
                  {/* Sex */}
                  <div className="flex flex-col">
                    <Label htmlFor={"sex"} required>
                      Sex
                    </Label>
                    <select
                      name="sex"
                      id="sex"
                      className="capitalize border border-black rounded-md p-2 w-full"
                    >
                      <option value="male" defaultValue={"male"}>
                        male
                      </option>
                      <option value="female">female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Academic Background */}
              <div className="max-w-80">
                <h2 className="font-semibold text-lg mb-3">
                  Academic Background
                </h2>

                <div className="flex flex-col gap-2">
                  {/* OAPR */}
                  <div className="">
                    <Label htmlFor={"oapr"} required>
                      Overall Percentille rank
                    </Label>
                    <Input type={"text"} name={"oapr"} id={"oapr"} />
                  </div>
                  {/* GPA */}
                  <div className="">
                    <Label htmlFor={"gpa"} required>
                      Grade 12 GPA
                    </Label>
                    <Input type={"text"} name={"gpa"} id={"gpa"} />
                  </div>
                  {/* Sex */}
                  <div className="flex flex-col">
                    <Label htmlFor={"strand"} required>
                      Strand
                    </Label>
                    <select
                      name="strand"
                      id="strand"
                      className="uppercase border border-black rounded-md p-2 w-full"
                    >
                      <option value="humss" defaultValue={"humss"}>
                        humss
                      </option>
                      <option value="ict">ict</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10 mb-5">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
