import React, {Component} from 'react';
import {Form, Input, Icon, Button, message} from 'antd';
import moment from "moment";
import * as CONSTANTS from '../constants.js'
import _ from 'underscore';

const FormItem = Form.Item;

let uuid = 0;

class DynamicFieldSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    //提交成功失败提醒
    success = () => {
        message.success('success');
    };
    error = () => {
        message.error('defeat');
    };

    remove = (k) => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let payload = {
                    email: this.props.email,
                    friendEmails: values.email
                };
                let data = new FormData();
                data.append( "json", JSON.stringify( payload ) );
                fetch(
                    `${CONSTANTS.BACKEND_URL}/participant/update/${encodeURIComponent(this.props.email)}`,
                    {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify( payload )
                    }
                ).catch(
                    error => this.error()
                ).then(response => {
                    if (response && response.status === 200) {
                        this.success()
                        window.location.reload();
                    }
                });
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 20},
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 20, offset: 2},
            },
        };
        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...(formItemLayoutWithOutLabel)}
                    required={false}
                    key={k}
                >

                    {getFieldDecorator(`email[${k}]`, {
                        rules: [{
                            type: 'email', message: 'Error type!',
                        }, {
                            required: true, message: 'Don\' null ',
                        }],
                        validateTrigger: 'onBlur', //失焦时再验证
                    })(
                        <Input placeholder="Input friend's Email" style={{width: '90%'}}/>
                    )}
                    {
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    }
                </FormItem>
            );
        });
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    {formItems}
                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type="dashed" onClick={this.add}>
                            <Icon type="plus"/> Add Email
                        </Button>
                        <Button type="primary" htmlType="submit">submit</Button>
                    </FormItem>
                </Form>
            </div>

        );
    }
}

const InviteFriendsPage = Form.create()(DynamicFieldSet);
export default InviteFriendsPage;
