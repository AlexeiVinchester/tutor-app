import InfoCircle from "./InfoCircle";
export default function InfoSection({header, value}) {
    return (
        <div className="select-section flex-column">
            <h3 className="info-label">{header}</h3>
            <InfoCircle value={value} />
        </div>
    );
}