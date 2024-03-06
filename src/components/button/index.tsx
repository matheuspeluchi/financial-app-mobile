import { Button } from "react-native-paper";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Button mode="contained" buttonColor="#00A547" onPress={onClick}>
      {label}
    </Button>
  );
};
export default CustomButton;
