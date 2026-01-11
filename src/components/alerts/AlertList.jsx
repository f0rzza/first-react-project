import Alert from './Alert';

export default function AlertList() {
  return (
    <div className="alert-list">
      <Alert heading="Success" type="information">
        Everything is really good!
      </Alert>

      <Alert heading="Oh no!" type="warning">
        Something went wrong
      </Alert>

      {/* Notice : we can also remove 'type' attribute because there are a default value in component */}
      <Alert heading="Shipping details!" type="">
        Delivery to France is possible
      </Alert>
    </div>
  );
}
