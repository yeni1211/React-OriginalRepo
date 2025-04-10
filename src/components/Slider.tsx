// Asegúrate de que la ruta a tu función cn sea correcta
export type SliderProps = {
  count: number;
  children?: React.ReactNode;
};
const Slider= ({ count, children}: SliderProps) => {
  const total = 150;
  const greenThreshold = 33;
  const yellowThreshold = 100;

  const getBackgroundColor = () => {
    if (count < 1 || count > total) {
      return "gray";
    }

    const greenStop = (greenThreshold / total) * 100;
    const yellowStop = (yellowThreshold / total) * 100;
    const currentPercentage = (count / total) * 100;

    if (count <= greenThreshold) {
      return `linear-gradient(to right, green ${currentPercentage}%, gray ${currentPercentage}%)`;
    } else if (count <= yellowThreshold) {
      const yellowStart = greenStop;
      return `linear-gradient(to right, green ${greenStop}%, yellow ${Math.max(
        yellowStart,
        currentPercentage
      )}%, gray ${Math.max(yellowStart, currentPercentage)}%)`;
    } else {
      const redStart = yellowStop;
      return `linear-gradient(to right, green ${greenStop}%, yellow ${yellowStop}%, red ${Math.max(
        redStart,
        currentPercentage
      )}%, gray ${Math.max(redStart, currentPercentage)}%)`;
    }
  };

  return (
    <div
      className={
        "w-full h-8 rounded-md transition-all duration-300 ease-in-out"
      }
      style={{ backgroundImage: getBackgroundColor() }}
    ></div>
  );
};

export default Slider;
