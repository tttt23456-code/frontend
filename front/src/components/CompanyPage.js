import React, { useState } from 'react';
import './CompanyPage.css'; // 确保路径正确

function CompanyPage() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAsk = () => {
        // 这里可以调用后端API进行AI问答
        // 目前只是模拟回答
        setAnswer(`您问的问题是: ${question}`);
        setQuestion('');
    };

    return (
        <div className="company-page">
            <section className="introduction">
                <h2>公司介绍</h2>
                <p>我们是一家致力于提供优质服务的公司，专注于技术创新和客户满意。</p>
            </section>

            <section className="ai-qa">
                <h3>AI问答模块</h3>
                <div className="chatbox">
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="请输入您的问题"
                    />
                    <button onClick={handleAsk}>提问</button>
                </div>
                {answer && <p>回答: {answer}</p>}
            </section>

            <section className="achievements">
                <h3>业绩展示</h3>
                <p>我们在过去的几年中取得了显著的成就，包括...</p>
            </section>

            <section className="contact">
                <h3>联系我们</h3>
                <p>如需更多信息，请通过以下方式联系我们：</p>
                <p>Email: contact@company.com</p>
                <p>电话: 123-456-7890</p>
            </section>
        </div>
    );
}

export default CompanyPage; 