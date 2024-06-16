import Link from "next/link";

export const CustomLink = ({ path, label}: { path: string, label: string}) => {
    return (
        <Link 
            href={path} 
                style={{
                    width: "100%",
                    textDecoration: "none", 
                    textTransform: "capitalize",
                    color: "#000000",
                    padding: "auto 12px",
                    fontSize: "14px",
                    fontWeight: "300"  
                }}
            >
            {label}
        </Link>
    )
}