import style from "./transaction.module.css";
export default function Transaction({ iteams }) {
  return (
    <table className={style.table}>
      <thead className={style.table}>
        <tr className={style.table}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={style.table}>
        {iteams.map((item) => (
          <tr key={item.id} className={style.table}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
