import "./Button.css"

function Button(props) {
    const { url, label } = props;
    return (
      <a href={url} className="button">
        {label}
      </a>
    );
}

export default Button;