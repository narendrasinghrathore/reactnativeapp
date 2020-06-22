const coreService = {
  getMonthDates: (year: number, month: number) => {
    if (!Number.isInteger(month) || !Number.isInteger(year)) return [];
    if (month < 0 || month > 11) return [];
    const totalDays = new Date(year, month, 0).getDate();
    return Array.from({ length: totalDays }, (v, k) => k + 1);
  },
  getTodayLabel: () => {
    return `${new Date().getDate()} ${coreService.getMonthLabel(
      new Date().getMonth()
    )} ${new Date().getFullYear()}`;
  },
  getMonthLabel: (month: number) => {
    const monthLabelList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthLabelList[month];
  },
  list: () => {
    return [
      { id: 1, title: "New note 1", date: "06-10-2020", category: "Todo" },
      { id: 2, title: "New note 2", date: "06-10-2020", category: "Todo" },
      { id: 3, title: "New note 3", date: "06-10-2020", category: "Todo" },
      { id: 4, title: "New note 4", date: "06-10-2020", category: "Todo" },
    ];
  },
};

export default coreService;
