import React, { useState } from 'react';

function CompanyIntroduction() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAsk = () => {
        // 这里可以调用后端API进行AI问答
        // 目前只是模拟回答
        setAnswer(`您问的问题是: ${question}`);
        setQuestion('');
    };

    return (
        <div>
            <h2>公司介绍</h2>
            <p>我们是一家致力于提供优质服务的公司...</p>
            <h3>AI问答模块</h3>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="请输入您的问题"
            />
            <button onClick={handleAsk}>提问</button>
            {answer && <p>回答: {answer}</p>}
        </div>
    );
}

export default CompanyIntroduction; 