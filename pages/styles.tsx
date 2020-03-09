import react, { Fragment } from "react"
import ProductCard from "../components/Cards/ProductCard.component"
import { MainContainer, GridContainer } from "../components/Containers/Containers.ui"


// https://images.unsplash.com/photo-1480072723304-5021e468de85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80


const product = {
  title: "carte postale de vacances",
  description: "papier blanc",
  price: 5.45,
  image: "https://images.unsplash.com/photo-1569229569803-69384f5efa83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3675&q=80"
}

const Styles = (props: any) => {

  return (
    <Fragment>
      <MainContainer>
        <GridContainer smColumns={2} lgColumns={4}>
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </GridContainer>
      </MainContainer>

    </Fragment>
  )

}

export default Styles