import React from "react";
import { Layout } from 'antd';
import HeaderNav from "../organisms/Header";

const { Footer, Content } = Layout;

type PropsT = {
    children: React.ReactNode | React.ReactNode[];
}

const PageLayout: React.FC<PropsT> = ({children}:PropsT) => {

        return (
        <div className="h-full">
            <Layout>
                <HeaderNav/>
                <Content >
                    {children}
                </Content>
                <Footer className="flex justify-center items-center fixed bottom-0 left-0 right-0">FOOTER</Footer>
            </Layout>
            
        </div>
    );
}

export default PageLayout;