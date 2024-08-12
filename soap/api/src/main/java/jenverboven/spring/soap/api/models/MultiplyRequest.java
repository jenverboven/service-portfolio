package jenverboven.spring.soap.api.models;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
//@XmlType(name = "", propOrder =
@XmlRootElement(name = "MultiplyRequest")
public class MultiplyRequest {
    protected int param1;
    protected int param2;

    public int multiply() {
        return 1;
    }
}
