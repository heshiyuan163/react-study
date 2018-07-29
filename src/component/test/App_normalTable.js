import React, { Component } from 'react';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class App extends Component {
        constructor(props){
            super(props);
            this.delUser=this.delUser.bind(this)
            this.addUser=this.addUser.bind(this)
            this.state={
                    userList:[
                        {
                            name:"张三",
                            age:23,
                            job:"java开发工程师"
                        },
                        {
                            name:"李四",
                            age:25,
                            job:"C++开发工程师"
                        },
                        {
                            name:"王五",
                            age:45,
                            job:"linux开发工程师"
                        }
                    ]
            }

        }

        delUser(ev){
             let userNum=ev.target.value;
             let newUserList=this.state.userList;
             newUserList.splice(userNum,1);
             this.setState({
                userList:newUserList
             });
        }
        addUser(ev){
            let name=this.refs.input_name.value;
            let age=this.refs.input_age.value;
            let job=this.refs.input_job.value;
            console.log("name="+name+",age="+age+",job="+job);
            let newUserList=[...this.state.userList,{name:name,age:age,job:job}];
            this.setState({userList:newUserList})
            this.refs.input_name.value="";
            this.refs.input_age.value="";
            this.refs.input_job.value="";
        }

        render() {
            return (
                  <div>
                      <table border="1">
                            <thead>
                                 <tr>
                                      <th>姓名</th>
                                      <th>年龄</th>
                                      <th>职业</th>
                                      <th onClick={this.delUser}>操作</th>
                                    </tr>
                            </thead>
                           <tbody>
                             {
                                this.state.userList.map((user,index)=>{
                                        return (<tr key={index}>
                                                  <td>{user.name}</td>
                                                  <td>{user.age}</td>
                                                  <td>{user.job}</td>
                                                  <td><Button bsStyle="warning" bsSize="xsmall" onClick={this.delUser} value={index}>删除</Button></td>
                                                </tr>)
                                })
                            }
                           </tbody>
                      </table>
                      姓名ssssssssssssssssss：<input type="text" ref="input_name"/><br/>
                      年龄：<input type="text" ref="input_age"/><br/>
                      职业：<input type="text" ref="input_job"/><br/>
                      <Button bsStyle="primary" onClick={this.addUser}>添加</Button>
                  </div>
            );
        }
}
export default App;
