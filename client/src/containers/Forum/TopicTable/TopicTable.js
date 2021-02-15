import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

class TopicTable extends React.Component {
  
  render() {

    const columns = [
        {
         name: "Title",
         options: {
            filter: true,
            sort: false
         }
        },
        {
        name: "Topic",
        options: {
            filter: true,
            sort: false
        }
        },
        {
        name: "Replies",
        options: {
            filter: true,
            sort: true,
            sortThirdClickReset: true
        }
        },
        {
        name: "Last Reply",
        options: {
            filter: true,
            sort: true,
            sortThirdClickReset: true
        }
        },
       ];

    const options = {
        filterType: "dropdown",
        responsive: "simple",
        download: "false",
        filter: "false",
        print: "false",
        viewColumns: "false",
        selectableRows: "none",
        selectableRowsHideCheckboxes: true,
        sortOrder: {
            name: "Last Reply",
            direction: "asc",
        },
        rowsPerPage: 10,
    };

    return (
      this.props.data.length > 0 && <MUIDataTable
        title={<div><Button variant="contained" color="primary" component={RouterLink} to="/newtopic">NEW TOPIC</Button></div>}
        data={this.props.data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default TopicTable;