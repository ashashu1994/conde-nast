import React from "react";
import ReactTable from "react-table";

const HomeTable = () => {
  const tableData = [
    { name: 'Tanner Linsley', age: 26 }
    , { name: 'Bob Dylan', age: 53 }
  ];
  const columns = [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    },
    {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }
  ];
  return (
    <div>
    </div>
  );
}

export default HomeTable;