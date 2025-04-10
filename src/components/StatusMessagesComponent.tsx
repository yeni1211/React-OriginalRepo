export type StatusMessagesComponentProps = {
  count: number;
};

export function StatusMessagesComponent({
  count,
}: StatusMessagesComponentProps) {
  return (
    <div>
      <div>
        {count > 10 ? (
          <div>El contador es mayor a 10</div>
        ) : count === 0 ? (
          <div>El contador es 0, por abajo de cero no se puede</div>
        ) : null}
      </div>
    </div>
  );
}
