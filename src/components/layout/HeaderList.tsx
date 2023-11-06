const HeaderList = () => {
  return (
    <div className=" flex justify-between items-center h-20 p-4 ">
      <div className="border-b border-solid flex justify-between items-center border-black w-full ml-20 mr-20 ">
        <div>
          <div className=" relative  text-black">
            <span className="font-bold">turkishairlines.com</span>
          </div>
        </div>

        <div>
          <div className="relative text-black">
            <span>
              search<span className="font-bold">Flight Challenge</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderList;
