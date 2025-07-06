interface Props {
    config:any,
    data:any
};

const RatioList = ({config,data}: Props) => {
 console.log(config)
  const renderedRows = config.map((row:any) => {
    return (
      <li className="flex w-full p-2  text-gray-600 justify-between rounded border-2 border-solid border-gray-300">
        <div>
          <p>{row?.label}</p>
          <p className="text-sm">{row?.subTitle}</p>
        </div>
        <div className="font-semibold text-black">{row?.render(data!)}</div>
      </li>
    );
  });
  return (
    <div>
      <ul className="divide-y-2 flex flex-col gap-3 mt-3">{renderedRows}</ul>
    </div>
  );
};

export default RatioList;
