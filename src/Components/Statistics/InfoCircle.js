export default function InfoCircle({value}) {
    return (
        <div className="value-section">
            <div className="value-area">
                <div className="inner-area">
                    <div className="text">
                        {value}
                    </div>
                </div>
            </div>
        </div>
    );
}