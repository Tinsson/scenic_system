import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import "../common/common.css"

const FormItem = Form.Item;

class Infobox extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log(values);
            }
        })
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="content">
                <h3 className="head">忘记密码</h3>
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('username',{
                            rules: [{required: true, message:'请输入您的手机号码'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 14}} />} size="large" type="text" placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 14 }} />} size="large" type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

Infobox = Form.create()(Infobox);

export default Infobox;