interface AlertProps {
  title: string;
  subTitle: string;
  backgroundColor: string;
}
const Alert = ({ title, subTitle, backgroundColor }: AlertProps) => {
  return (
    <div
      style={backgroundColor ? { backgroundColor } : { backgroundColor: "red" }}
    >
      <p>Title</p>
      <p>{title}</p>
      <p>Subtitle</p>
      <p>{subTitle}</p>
    </div>
  );
};

export default Alert;
