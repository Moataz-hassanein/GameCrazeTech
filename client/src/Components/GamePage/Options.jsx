import { useState } from "react";
import Select from "react-select";
import { GiCheckMark } from "react-icons/gi";
import NotRun from "./NotRun";
import "../../Style/Options.css";

const Options = ({ game }) => {
  const [canRun, setCanRun] = useState();
  const [isShown, setIsShown] = useState(false);
  const [selectedCpu, setSelectedCpu] = useState(null);
  const [selectedGpu, setSelectedGpu] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedOs, setSelectedOs] = useState(null);
 

  const [isRamWork, setIsRamWork] = useState(true);
  const [isCpuWork, setIsCpuWork] = useState(true);
  const [isGpuWork, setIsGpuWork] = useState(true);
  const [isOsWork, setIsOsWork] = useState(true);



  const cpu = [
    { value: "Intel Core i7-4770K ", label: "Intel Core i7-4770K ", id: 6 },
    { value: "AMD Ryzen 5 3500 ", label: "AMD Ryzen 5 3500 ", id: 5 },
    { value: "Intel Core i5-2500K ", label: "Intel Core i5-2500K ", id: 4 },
    { value: "Intel Core i3-8100", label: "Intel Core i3-8100", id: 3 },
    { value: "AMD Phenom™ X3 8750 ", label: "AMD Phenom™ X3 8750 ", id: 2 },
    {
      value: "Intel Core 2 Duo 2.2 GHz ",
      label: "Intel Core 2 Duo 2.2 GHz ",
      id: 1,
    },
  ];
  const graphics = [
    {
      value: "NVIDIA GeForce GTX 1080",
      label: "NVIDIA GeForce GTX 1080",
      id: 6,
    },
    { value: " AMD Radeon RX 480 ", label: " AMD Radeon RX 480 ", id: 5 },
    { value: "NVIDIA GeForce GTX 670", label: "NVIDIA GeForce GTX 670", id: 4 },
    {
      value: "AMD Radeon HD 7850 2GB,",
      label: "AMD Radeon HD 7850 2GB,",
      id: 3,
    },
    {
      value: "NVIDIA GeForce GTX 480 ",
      label: "NVIDIA GeForce GTX 480 ",
      id: 2,
    },
    { value: "ATI Radeon 9800 Pro ", label: "ATI Radeon 9800 Pro ", id: 1 },
  ];
  const ram = [
    { value: "32 GB", label: "32 GB" },
    { value: "16 GB", label: "16 GB" },
    { value: "8 GB", label: "8 GB" },
    { value: "6 GB", label: "6 GB" },
    { value: "4 GB", label: "4 GB" },
    { value: "2 GB", label: "2 GB" },
  ];
  const os = [
    { value: "Windows 10 64-bit", label: "Windows 10 64-bit", id: 6 },
    { value: "Windows 8.1 64-bit", label: "Windows 8.1 64-bit", id: 5 },
    { value: "Windows 7 64-bit", label: "Windows 7 64-bit", id: 4 },
    { value: "Windows Vista ", label: "Windows Vista ", id: 3 },
    { value: "Windows XP SP3 ", label: "Windows XP SP3 ", id: 2 },
    { value: "Windows 98SE ", label: "Windows 98SE ", id: 1 },
  ];
  const handleChangeCpu = (selectedCpu) => {
    setDisplay(false);
    setSelectedCpu(selectedCpu);
  };
  const handleChangeGpu = (selectedGpu) => {
    setDisplay(false);
    setSelectedGpu(selectedGpu);
  };
  const handleChangeRam = (selectedRam) => {
    setDisplay(false);
    setSelectedRam(selectedRam);
  };
  const handleChangeOS = (selectedOs) => {
    setDisplay(false);
    setSelectedOs(selectedOs);
  };

  const compare = (a, b) => {
    return a >= b;
  };
  const compareRam = (a, b) => {
    return +a.value.slice(0, -2) >= +b.slice(0, -2);
  };

  const checkAllRequirements = () => {
  let  cpuWorks = compare(selectedCpu.id, game["minimum_requirements"]["cpu_id"]);

    if (!cpuWorks) {
      setIsCpuWork(false);
    } else {
      setIsCpuWork(true);
    }

  let  gpuWorks = compare(selectedGpu.id, game["minimum_requirements"]["gpu_id"]);

    if (!gpuWorks) {
      setIsGpuWork(false);
    } else {
      setIsGpuWork(true);
    }
let osWorks = compare(selectedOs.id, game["minimum_requirements"]["os_id"]);

    if (!osWorks) {
      setIsOsWork(false);
    } else {
      setIsOsWork(true);
    }

  let  ramWorks = compareRam(selectedRam, game["minimum_requirements"].memory);

    if (!ramWorks) {
      setIsRamWork(false);
    } else {
      setIsRamWork(true);
    }


    if (cpuWorks && gpuWorks && osWorks && ramWorks) {
      setCanRun(true);
      setDisplay(true);
    } else {
      setCanRun(false);
      setDisplay(true);
    }
  };
  const setDisplay = (bool) => {
    setIsShown(bool);
  };

  

  return (
    <div className="grid gap-7 grid-cols-2  auto-rows-max my-2 mx-7 sm:m-4 options-container text-sm lg:text-xl">
      {isShown && (
        <div className="col-span-2">
          {canRun ? (
            <>
              {" "}
              <GiCheckMark className="inline text-2xl text-green-500" />{" "}
              <span className="text-xl text-green-500">
                Yes, You Can Run It
              </span>
            </>
          ) : (
            <NotRun />
          )}{" "}
        </div>
      )}
      
      <div>
        <label htmlFor="selectOption">CPU</label>
        <Select

          className={
            isCpuWork
              ? "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base"
              : "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base notWorking"
          }

          value={selectedCpu}
          closeMenuOnSelect={true}
          options={cpu}
          onChange={handleChangeCpu}
        />
      </div>
      <div>
        <label htmlFor="selectOption">GPU</label>
        <Select

          className={
            isGpuWork
              ? "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base"
              : "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base notWorking"
          }

          value={selectedGpu}
          closeMenuOnSelect={true}
          options={graphics}
          onChange={handleChangeGpu}
        />
      </div>
      <div>
        <label htmlFor="selectOption">RAM</label>
        <Select

          className={
            isRamWork
              ? "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base"
              : "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base notWorking"
          }

          value={selectedRam}
          closeMenuOnSelect={true}
          options={ram}
          onChange={handleChangeRam}
        />
      </div>
      <div>
        <label htmlFor="selectOption">OS</label>
        <Select

          className={
            isOsWork
              ? "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base"
              : "md:w-auto lg:w-48 xl:w-56 text-xs sm:text-base notWorking"
          }

          value={selectedOs}
          closeMenuOnSelect={true}
          options={os}
          onChange={handleChangeOS}
        />
      </div>

      <button
        className="canIRunBtn mt-4 w-[210%] sm:w-[200%] md:w-[206%] lg:w-[212%] "
        onClick={checkAllRequirements}
      >
        Can I Run It ?
      </button>
    </div>
  );
};

export default Options;
