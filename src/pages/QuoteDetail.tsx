import { FC } from "react";
import { useParams } from "react-router-dom";

interface IQuoteDetail {}

const QuoteDetail: FC<IQuoteDetail> = (props) => {
    const { quoteId } = useParams<{ quoteId: string | undefined }>();
    return (
        <>
            <p>Your quote is: </p>
            <h3>{quoteId}</h3>
        </>
    );
};

export default QuoteDetail;
