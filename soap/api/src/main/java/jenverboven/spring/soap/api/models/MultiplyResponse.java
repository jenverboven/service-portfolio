package jenverboven.spring.soap.api.models;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "MultiplyResponse")
public class MultiplyResponse {

    @XmlElement(required = true)
    protected int answer;

    public int getAnswer() {
        return answer;
    }

    public void setAnswer(int value) {
        this.answer = value;
    }
}
