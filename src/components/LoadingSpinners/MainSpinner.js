export default function MainSpinner() {
  return (
    <div className="flex h-96 item center">
      <img
        className="animate-spin rounded-full m-auto"
        width="60"
        height="60"
        src="/logo.png"
        alt="shopay logo"
      />
    </div>
  );
}
