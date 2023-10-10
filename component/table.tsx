import { Table } from "@mantine/core";

export default function DetectionTable({ records }: any) {
  const rows = records.map((record: any) => (
    <tr key={record.id}>
      <td>{record.id}</td>
      <td>{record.distance}</td>
      <td>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }).format(new Date(record.detected_at))}
      </td>
    </tr>
  ));

  return (
    <Table
      striped
      highlightOnHover
      withBorder
      horizontalSpacing="xl"
      verticalSpacing="xl"
      fontSize="xl"
    >
      <caption>Detection records from Amazon Web Service RDB (MySQL)</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Distance (Centimeters)</th>
          <th>Detected At</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
