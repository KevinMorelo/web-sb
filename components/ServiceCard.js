export default function ServiceCard({ title, description }) {
    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "10px" }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
