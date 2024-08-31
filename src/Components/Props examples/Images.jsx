
const CustomImage = (props)=>{

    const {source,width,height,alternateText} = props ;

    return (
        
        <img src={source} alt={alternateText} width={width} height={height} />
        
    )
}

export default CustomImage