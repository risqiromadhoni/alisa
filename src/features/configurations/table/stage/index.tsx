import ConfigurationStageTableDetail from "./detail";
import ConfigurationStageTableStages from "./stages";

const ConfigurationStageTable = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-4 p-4">
      <ConfigurationStageTableDetail />
      <ConfigurationStageTableStages />
    </div>
  );
};

export default ConfigurationStageTable;
