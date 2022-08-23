import { Oval } from 'react-loader-spinner'
import getInfo from '../Services/getInfo';
import React, { Component } from "react";
import Info from "./info";
import './style.css';

export default class ipInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: null,
            isLoading: true
        }
    }

    componentDidMount() {
        getInfo().then(data => {
            this.setState({
                info: data,
                isLoading: false
            })
        });
    }
    render() {
        const isLoading = this.state.isLoading;
        return (
            <>
                {isLoading ?
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    /> :
                    <Info data={this.state.info} />
                }
            </>
        )
    }
}