import Toast from "react-native-toast-message";

export function ToastAlert() {
  function closeToast() {
    Toast.hide();
  }

  return (
    <Toast
      bottomOffset={100}
      position="bottom"
      visibilityTime={3000}
      onPress={closeToast}
    />
  );
}
