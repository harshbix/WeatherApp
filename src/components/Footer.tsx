interface Props
{
    icon : string;
    label : string;
    value : string;
}
const FooterItem = ({icon,label,value} : Props) =>
{
    <div className={label.toLowerCase()} >
        <span className={icon}></span><br />
        <span>{label}</span><br />
        <span>{value}</span><br />
    </div> 
}
const Footer = () => {
  return (
    <div>
        <div className="footer">
            <FooterItem icon ="bi bi-sunset" label="Sunset" value="08:06"/>
            <FooterItem icon ="bi bi-wind" label="Wind" value="4m/s"/>
            <FooterItem icon ="bi bi-thermometer" label="Temperature" value="20&deg;C"/>
        </div>
    </div>
  )
}

export default Footer;