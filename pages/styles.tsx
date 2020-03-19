import { Fragment } from "react";
import ProductCard from "../components/Cards/ProductCard.component";
import {
  MainContainer,
  GridContainer
} from "../components/Containers/Containers.ui";
import Footer from "../components/Footer/Footer.component";
import { FormWrapper } from "../components/Form/Form.ui";
import { TextInput } from "../components/Form/TextInput.component";
import { NumberInput } from "../components/Form/NumberInput.component";

// https://images.unsplash.com/photo-1480072723304-5021e468de85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80

const product = {
  title: "carte postale de vacances",
  description: "papier blanc",
  price: 500,
  image:
    "https://images.unsplash.com/photo-1569229569803-69384f5efa83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3675&q=80"
};

const Styles = (props: any) => {
  return (
    <Fragment>
      <MainContainer>
        <h2>1. cards</h2>
        <GridContainer smColumns={2} lgColumns={4}>
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </GridContainer>

        <h2>2. form</h2>
        <GridContainer smColumns={2} lgColumns={2}>
          <FormWrapper>
            <TextInput />
            <NumberInput />
          </FormWrapper>
        </GridContainer>

        <h2>12. footer</h2>
        <Footer />
      </MainContainer>
    </Fragment>
  );
};

export default Styles;
