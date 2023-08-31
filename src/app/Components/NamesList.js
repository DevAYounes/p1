import { Card, Space, Button, List } from "antd";
import { useState } from "react";
const NamesList = (props) => {
  var [UsersData, setUsersData] = useState(props.UsersData.data["users"]);

  const [SortedUsers, SortUsers] = useState(
    UsersData.sort(function (a, b) {
      return a.age - b.age;
    })
  );
  const shuffleUsers = () => {
    for (let i = UsersData.length; --i; ) {
      let j = Math.floor(Math.random() * (i + 1));
      [UsersData[i], UsersData[j]] = [UsersData[j], UsersData[i]];
    }

    return [...UsersData];
  };
  // useEffect(()=>{console.log('updated')},[UsersData]);
  function Randomize() {
    SortUsers(shuffleUsers());
  }

  return (
    <Space direction="vertical" size={16}>
      <Card
        title="List of names"
        extra={
          <Button
            type="primary"
            onClick={() => {
              Randomize();
            }}
          >
            Randomize
          </Button>
        }
        style={{ width: 500, height: 900, overflow: "auto" }}
      >
        <List
          itemLayout="horizontal"
          dataSource={SortedUsers}
          renderItem={(item, i) => (
            <List.Item>
              <List.Item.Meta
                title={"User" + " " + i}
                description={
                  "Username: " + item.username + " , Age: " + item.age
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </Space>
  );
};
export default NamesList;
