import { shallow } from "enzyme";
import { toast } from "../../BLL/Toast";
import { NotificationToast } from "./NotificationToast";

describe("Test NotificationToast component", () => {
  let wrapper = shallow(<NotificationToast />);
  beforeEach(() => {
    wrapper = shallow(<NotificationToast />);
  });
  test("Is toast exist", () => {
    expect(!!wrapper.find("#notification-toast")).toBe(true);
  });
  test("Has toast got header exist", () => {
    expect(!!wrapper.find("#notification-toast-header")).toBe(true);
  });
  test("Has toast got body exist", () => {
    expect(!!wrapper.find("#notification-toast-body")).toBe(true);
  });
  test("Has toast got body exist", () => {
    expect(wrapper.find("#notification-toast-body").text()).toBe(toast.title);
  });
});
