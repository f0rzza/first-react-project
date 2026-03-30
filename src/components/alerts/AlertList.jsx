import Alert from './Alert';

export default function AlertList() {
  return (
    <>
      <h1>List of Alert components</h1>
      <h2>With Hook: useState</h2>

      <div className="alert-list">
        <Alert
          heading="Success"
          type="information"
          closable={true}
          onClose={() => console.log('closed')}
        >
          Everything is really good!
        </Alert>

        <Alert heading="Oh no!" type="warning" closable>
          Something went wrong
        </Alert>

        {/* Notice : we can also remove 'type' attribute because there are a default value in component */}
        <Alert heading="Shipping details!" type="">
          Delivery to France is possible
        </Alert>
      </div>
    </>
  );
}
