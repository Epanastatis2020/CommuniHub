import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { array } from "prop-types";

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

    //PLACEHOLDER DATA FOR WHEN NOT USING API FOR TOPIC RECORDS
    // const data = [
    //   [<Link href="#" color="inherit">Announcements</Link>, "This topic is solely for announcements", 1, "today"],
    //   ["Aiden Lloyd", "Business Consultant", 55, "$200,000"],
    //   ["Jaden Collins", "Attorney", 27, "$500,000"],
    //   ["Franky Rees", "Business Analyst", 22, "$50,000"],
    //   ["Aaren Rose", "Business Consultant", 28, "$75,000"],
    //   ["Frankie Parry", "Agency Legal Counsel", 71, "$210,000"],
    //   ["Lane Wilson", "Commercial Specialist", 19, "$65,000"],
    //   ["Robin Duncan", "Business Analyst", 20, "$77,000"],
    //   ["Mel Brooks", "Business Consultant", 37, "$135,000"],
    //   ["Harper White", "Attorney", 52, "$420,000"],
    //   ["Kris Humphrey", "Agency Legal Counsel", 30, "$150,000"],
    //   ["Frankie Long", "Industrial Analyst", 31, "$170,000"],
    //   ["Brynn Robbins", "Business Analyst", 22, "$90,000"],
    // ];

    const topicData = this.props.topicData;

    // Which looks like:
    // topicData = [ { 
    //     content: "string",
    //     createdAt: "date",
    //     forum_id: "string",
    //     isSticky: "boolean",
    //     title: "string",
    //     updatedAt: "date",
    //     user_id: "string",
    //     _id: "string"
    // }]

    const newData = topicData.map(topic => [<Link href="#" color="inherit">{topic.title}</Link>, topic.content, topic.isSticky, topic.updatedAt]);

    // console.log(data);

    const options = {
        filterType: "dropdown",
        responsive: "simple",
        download: "false",
        filter: "false",
        print: "false",
        viewColumns: "false",
        selectableRows: "none",
        selectableRowsHideCheckboxes: "true",
        sortOrder: {
            name: "Last Reply",
            direction: "asc",
        },
        rowsPerPage: 10,
    };

    return (
      <MUIDataTable
        title={<div><Button variant="contained" color="primary">NEW TOPIC</Button></div>}
        data={newData}
        columns={columns}
        options={options}
      />
    );
  }
}

export default TopicTable;