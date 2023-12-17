import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch } from "react-icons/hi";

function Header() {
  const [destination, setDestination] = useState("");
  return (
    <div className="header">
      {/* <NavLink to="/bookmark">Bookmarks</NavLink> */}
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="where to go?"
            className="headerSearchInput"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div onClick={() => setOpenDate(!openDate)} className="dateDropDown">
            {/* {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`} */}
            2023/11/5
          </div>
          {/* {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            ranges={date}
            className="date"
            minDate={new Date()}
            moveRangeOnFirstSelection={true}
          />
        )} */}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          {/* <div id="optionDropDown" onClick={() => setOpenOptions(!openOptions)}>
          {options.adult} adult &nbsp;&bull;&nbsp; {options.children} children
          &nbsp;&bull;&nbsp;
          {options.room} room
        </div> */}
          {/* {openOptions && (
          <GuestOptionList
            setOpenOptions={setOpenOptions}
            handleOptions={handleOptions}
            options={options}
          />
        )} */}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
      {/* <User /> */}
    </div>
  );
}

export default Header;
