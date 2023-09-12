function Card(props: any) {
  const classes = "p-2 " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
