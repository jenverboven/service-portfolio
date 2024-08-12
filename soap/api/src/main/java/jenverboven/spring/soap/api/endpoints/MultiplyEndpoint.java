package jenverboven.spring.soap.api.endpoints;

import jenverboven.spring.soap.api.models.MultiplyRequest;
import jenverboven.spring.soap.api.models.MultiplyResponse;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class MultiplyEndpoint {
    public static final String NAMESPACE_URI = "http://www.jenverboven.com/spring/soap/api/multiply";

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "MultiplyRequest")
    @ResponsePayload
    public MultiplyResponse multiplyResponse(@RequestPayload MultiplyRequest multiplyRequest) {
        MultiplyResponse multiplyResponse = new MultiplyResponse();
        multiplyResponse.setAnswer(1);

        return multiplyResponse;
    }
}
