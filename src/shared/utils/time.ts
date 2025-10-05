// dayjs "mini" wrapper con Intl para no agregar libs externas.
const dayjs = (d?: Date | string | number) => {
  const date = d ? new Date(d) : new Date();
  return {
    format(fmt: string) {
      // Soporta "D/MM/YYYY"
      if (fmt === "D/MM/YYYY") {
        return `${date.getDate()}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${date.getFullYear()}`;
      }
      return date.toLocaleString();
    },
    toDate() {
      return date;
    },
  };
};
export default dayjs;
