import React from "react"
import styled from "styled-components"
import { colors } from "../../style/constants"

const ThumbnailStrip = () => {
  const images = [
    {
      src:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      alt: "",
    },
    {
      src:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
      alt: "",
    },
    {
      src:
        "https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w",
      alt: "",
    },
    {
      src:
        "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg",
      alt: "",
    },
    {
      src:
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
      alt: "",
    },
  ]

  return (
    <StyledStrip>
      <CarouselButton left>Left</CarouselButton>
      {images.map(image => (
        <div>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      <CarouselButton right>Right</CarouselButton>
    </StyledStrip>
  )
}

export default ThumbnailStrip

const StyledStrip = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;

  > div {
    flex: 1;
  }

  img {
    margin: 0;
    width: 100%;
    max-height: 100px;
    object-fit: cover;
    display: flex;
  }
`

const CarouselButton = styled.button`
  background: ${colors.dark};
  color: white;
`
