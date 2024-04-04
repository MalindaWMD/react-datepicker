() => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const ranges = [
    {
      label: "Today",
      rangeFn: () => {
        setStartDate(new Date());
        setEndDate(new Date());
      },
    },
    {
      label: "Yesterday",
      rangeFn: () => {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        setStartDate(date);
        setEndDate(date);
      },
    },
  ];

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="datepicker-wrapper">
      <div className="datepicker-static-ranges">
        {ranges.map((range, idx) => {
          return (
            <li key={"range-" + idx} onClick={range.rangeFn}>
              {range.label}
            </li>
          );
        })}
      </div>

      <DatePicker
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        monthsShown={2}
        selectsRange
        inline
      />
    </div>
  );
};
