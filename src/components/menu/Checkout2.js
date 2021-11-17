import React, { Component } from "react";
import { connect } from "react-redux";

//React Elements
import DatePicker from "react-datepicker";
import ReactTimePicker from "react-ts-timepicker";

//Urls
import axios from "axios";
import { api } from "../../store/actions/api";
import { slugs } from "../../store/actions/urls";

//Routers
import { Link, withRouter, Redirect } from "react-router-dom";

//Components
import Navbar from "../MainComponents/Navbar";
import Footer from "../MainComponents/Footer";

//Actions
import * as actionCreators from "../../store/actions";

//Functions
import { designLoad } from "../../helpers/design";

class Checkout extends Component {
  state = {
    selectedDate: new Date(),
    minDate: new Date(),
    dateFormat: "",
    selectedTime: "",
    maxSelectedTime: "",
    minTime: "",
    maxTime: "",
    timeOptionsComponent: null,

    timePickerComponent: true,
    otherTimePickerComponent: false,

    paymentMethod: "",
    diningOption: this.props.diningOption,
    editAddress: false,
    deliveryView: false,
    pickupView: false,
    message: "",
    selectedAddressMessage: "",
    style: "",
    renderFutureOrders: this.props.selectedEstablishment
      ? this.props.selectedEstablishment.render_future_orders
      : false,
    renderFutureOrdersForDays: this.props.selectedEstablishment
      ? this.props.selectedEstablishment.render_future_orders_for_days
      : false,
    notes: "",

    selectedAddress: this.props.selectedAddress,
    pickupDining: false,
    deliveryDining: true,
  };

  componentDidMount() {
    designLoad();
    let foundDeliveryAreaInAddresses = [];
    if (this.props.diningOption == "Delivery") {
      if (this.props.selectedAddress) {
        this.checkAddressOnMount(this.props.selectedAddress);
      } else {
        if (this.props.deliveringArea) {
          foundDeliveryAreaInAddresses = this.props.addressList.filter(
            (address) => address.area.name == this.props.deliveringArea.name
          );
          if (foundDeliveryAreaInAddresses.length > 0) {
            this.checkAddressOnMount(foundDeliveryAreaInAddresses[0]);
          }
        }
      }
    }
    if (
      this.props.mainEstablishment.cash_payment &&
      this.props.mainEstablishment.knet_payment
    ) {
      this.setState({ paymentMethod: "Cash" });
    } else if (
      this.props.mainEstablishment.cash_payment &&
      !this.props.mainEstablishment.knet_payment
    ) {
      this.setState({ paymentMethod: "Cash" });
    } else if (
      !this.props.mainEstablishment.cash_payment &&
      this.props.mainEstablishment.knet_payment
    ) {
      this.setState({ paymentMethod: "Card" });
    }

    if (this.props.profile) {
      this.props.getAddress(this.props.profile);
    }
    var selectedDate = new Date();
    var selectedTime;
    if (this.props.estimatedTime) {
      selectedDate.setMinutes(
        selectedDate.getMinutes() + parseInt(this.props.estimatedTime)
      );
    }

    selectedTime =
      selectedDate.getHours() +
      ":" +
      (selectedDate.getMinutes() < 10 ? "0" : "") +
      selectedDate.getMinutes();

    this.setState({ selectedTime: selectedTime, minTime: selectedTime });

    if (this.props.diningOption == "Pickup") {
      this.setState({
        pickupDining: true,
        deliveryDining: false,
      });
    } else {
      this.setState({
        pickupDining: false,
        deliveryDining: true,
      });
    }
    for (let i = 0; i < this.props.workingHours.length; i++) {
      // this.checkWorkingHours(
      //   this.props.workingHours[i],
      //   this.state.selectedDate
      // );
    }
  }

  getCookie(name) {
    if (!document.cookie) {
      return null;
    }
    const token = document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((c) => c.startsWith(name + "="));

    if (token.length === 0) {
      return null;
    }
    return decodeURIComponent(token[0].split("=")[1]);
  }

  getDateFormat = (date) => {
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    var dateFormat = [
      date.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
    ].join("-");
    return dateFormat;
  };

  handleChangeCalendar = (e) => {
    var dateFormat = this.getDateFormat(e);
    this.setState({ selectedDate: e, dateFormat: dateFormat });
    for (let i = 0; i < this.props.workingHours.length; i++) {
      this.checkWorkingHours(this.props.workingHours[i], e);
    }
  };

  checkWorkingHours = (data, date) => {
    let timePickerComponentState = !this.state.timePickerComponent;
    let otherTimePickerComponentState = !this.state.otherTimePickerComponent;

    let checkTime = false;
    var options = { weekday: "long" };
    let chosenDay = new Intl.DateTimeFormat("en-US", options).format(date);
    let today = new Date();

    let days = [
      {
        number: 0,
        name: "Sunday",
      },
      {
        number: 1,
        name: "Monday",
      },
      {
        number: 2,
        name: "Tuesday",
      },
      {
        number: 3,
        name: "Wednesday",
      },
      {
        number: 4,
        name: "Thursday",
      },
      {
        number: 5,
        name: "Friday",
      },
      {
        number: 6,
        name: "Saturday",
      },
    ];

    let foundFromDay = days.find(function (day) {
      return day.name == data.from_day;
    });
    let foundToDay = days.find(function (day) {
      return day.name == data.to_day;
    });

    if (foundFromDay && foundToDay) {
      if (data.status == "Closed") {
        this.setState({
          futureOrderMessage:
            "Sorry we are not recieving orders on " + chosenDay,
        });
      } else {
        //check direction
        if (foundFromDay.number < foundToDay.number) {
          if (
            foundFromDay.number <= date.getDay() &&
            date.getDay() <= foundToDay.number
          ) {
            checkTime = true;
          } else {
            console.log("closed A");
          }
        } else if (foundFromDay.number > foundToDay.number) {
          if (foundFromDay.number == 6) {
            if (date.getDay() == 6) {
              checkTime = true;
            } else if (
              foundFromDay.number >= date.getDay() &&
              date.getDay() <= foundToDay.number
            ) {
              checkTime = true;
            } else {
              console.log("closed D1");
            }
          } else if (foundToDay.number == 0) {
            if (date.getDay() == 0) {
              checkTime = true;
            } else if (
              foundFromDay.number <= date.getDay() &&
              date.getDay() >= foundToDay.number
            ) {
              checkTime = true;
            } else {
              console.log("closed D2");
            }
          } else {
            if (date.getDay() == 0) {
              if (
                foundFromDay.number >= date.getDay() &&
                date.getDay() <= foundToDay.number
              ) {
                checkTime = true;
              }
            } else {
              if (
                foundFromDay.number <= date.getDay() &&
                date.getDay() >= foundToDay.number
              ) {
                checkTime = true;
              }
            }
          }
        }
      }
    } else if (foundFromDay) {
      if (foundFromDay.number == date.getDay()) {
        if (data.status == "Closed") {
          this.setState({
            futureOrderMessage:
              "Sorry we are not accepting orders on " + chosenDay,
            confirmFutureOrder: false,
          });
        } else {
          this.setState({
            futureOrderMessage: "",
            confirmFutureOrder: true,
          });
          checkTime = true;
        }
      }
    }
    if (checkTime) {
      let nowTime = this.getTime(date);
      let fromTimeResult = this.parseTime(data.from_time, null);
      let fromTime = this.getTime(fromTimeResult);
      let toTimeResult = this.parseTime(data.to_time, null);
      let toTime = this.getTime(toTimeResult);
      if (fromTime < nowTime && nowTime < toTime) {
        if (today.getDate() == date.getDate()) {
          if (this.props.estimatedTime) {
            let newDate = new Date();
            newDate.setMinutes(
              newDate.getMinutes() + parseInt(this.props.estimatedTime)
            );
            nowTime = this.getTime(newDate);
          }
          this.setState({ minTime: nowTime, maxTime: toTime });
          this.createTimeOptionsComponent(nowTime, toTime);
        } else {
          this.setState({ minTime: fromTime, maxTime: toTime });
          this.createTimeOptionsComponent(fromTime, toTime);
        }
        this.setState({
          futureOrderMessage: "",
          selectedTime: nowTime,
          timePickerComponent: timePickerComponentState, //false
          otherTimePickerComponent: otherTimePickerComponentState, //true
          confirmFutureOrder: true,
        });
      } else {
        this.setState({
          futureOrderMessage: "Sorry we are not accepting orders on this Range",
          confirmFutureOrder: false,
        });
      }
    }
  };

  parseTime = (timeStr, dt) => {
    if (!dt) {
      dt = new Date();
    }
    var time = timeStr.match(/(\d+)(?::(\d\d))?\s*(p?)/i);
    if (!time) {
      return NaN;
    }
    var hours = parseInt(time[1], 10);
    if (hours == 12 && !time[3]) {
      hours = 0;
    } else {
      hours += hours < 12 && time[3] ? 12 : 0;
    }
    dt.setHours(hours);
    dt.setMinutes(parseInt(time[2], 10) || 0);
    dt.setSeconds(0, 0);
    return dt;
  };

  getTime = (date) => {
    let hours = date.getHours();
    // hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let ampm = hours >= 12 ? "PM" : "AM";
    let strTime = hours + ":" + minutes + ":00";
    return strTime;
  };

  handleChangeTime = (e) => {
    let data = JSON.parse(e.currentTarget.value);

    let fromTimeResult = this.parseTime(data.dateRange1Format, null);
    let fromTime = this.getTime(fromTimeResult);
    let toTimeResult = this.parseTime(data.dateRange2Format, null);
    let toTime = this.getTime(toTimeResult);
    this.setState({ selectedTime: fromTime, maxSelectedTime: toTime });
  };

  handleChangeNotes = (e) => {
    this.setState({ notes: e.currentTarget.value });
  };

  createOrder(address, orderList, totalPrice) {
    var customer_address = null;
    var pickup_address = null;
    var payment_status = "Unpaid";
    var service_fee = "";

    var dateFormat = this.getDateFormat(this.state.selectedDate);
    var profile = null;
    var guest = null;

    if (this.props.profile) {
      profile = this.props.profile;
    } else {
      guest = this.props.guest;
    }

    if (this.props.selectedAddress == null) {
      this.setState({ message: "Please Choose Address" });
    } else {
      if (this.state.paymentMethod == "") {
        this.setState({
          message: "Choose a payment method",
        });
      } else {
        if (this.props.totalPrice == 0) {
          this.setState({ message: "Amount of 0.000" });
        } else {
          if (
            this.props.diningOption == "Delivery" &&
            parseFloat(this.props.totalPrice) <
              parseFloat(this.props.order_minimum_amount)
          ) {
            this.setState({
              message:
                "Minimum Order Amount " +
                this.props.order_minimum_amount +
                "KD",
            });
          } else {
            if (this.state.diningOption == "Delivery") {
              customer_address = this.props.selectedAddress.id;
              service_fee = this.props.serviceFee;
            } else {
              pickup_address = this.props.selectedAddress.id;
            }

            const postedData = {
              profile: profile,
              guest: guest,
              agent: null,
              customer_address: customer_address,
              pickup_address: pickup_address,
              establishment: this.props.selectedEstablishment.id, ////
              order_type: "Online-Ordering",
              payment_method: this.state.paymentMethod,
              dining_status: this.state.diningOption,
              payment_status: payment_status,
              order_date: dateFormat,
              closed_date: dateFormat,
              order_time: this.state.selectedTime,
              products: orderList,
              notes: this.state.notes,
              raw_data: {
                sms: false,
                products: orderList,
                total_price: totalPrice,
                service_fee: service_fee,
                customer_address: this.props.selectedAddress,
              },
            };
            let data = {
              main_establishment: this.props.mainEstablishment.id,
              order: postedData,
            };

            this.setState({ style: "info-overlay" });
            if (this.state.paymentMethod == "Cash") {
              this.postCartToServer(data);
            } else {
              this.checkoutPayment(data);
            }
          }
        }
      }
    }
  }

  postCartToServer(data) {
    var csrftoken = this.getCookie("csrftoken");
    const { setOrder } = this.props;
    const { history } = this.props;

    axios({
      method: "post",
      url: api.CREATE_ORDER,
      data: data,
      headers: {
        "X-CSRFToken": csrftoken,
      },
    })
      .then(
        function (response) {
          if (response.status == 201) {
            if (this.state.paymentMethod == "Cash") {
              setOrder(response.data);
              history.push(slugs.ORDER_CONFIRM);
            }
          } else {
            setOrder(response.data);
            history.push(slugs.ORDER_DISCONFIRM);
            // console.log("REsponse", response);

            // history.push({
            //   pathname: slugs.ORDER_DISCONFIRM,
            //   search: "?field=",
            //   state: { detail: null },
            // });
          }
        }.bind(this)
      )
      .catch((error) => {
        console.log("error", error);
      });
  }

  handleChangePayment = (e) => {
    this.setState({
      paymentMethod: e.currentTarget.value,
    });
  };

  handleChangeDining = (e) => {
    const { updateSelectedAddress } = this.props;
    updateSelectedAddress(null, true, null);
    this.setState({ diningOption: e.currentTarget.value });
    if (e.currentTarget.value == "Delivery") {
      this.setState({
        deliveryView: true,
        deliveryDining: true,
        pickupDining: false,
        selectedAddress: null,
      });
    } else if (e.currentTarget.value == "Pickup") {
      this.setState({
        deliveryView: false,
        pickupDining: true,
        deliveryDining: false,
        selectedAddress: this.props.establishment.branch,
        selectedAddressMessage: "",
      });

      updateSelectedAddress(this.props.establishment.branch, true, "Pickup");
    }
  };

  handleChooseDelivery = (e) => {
    const option = "Delivery";
    let foundZone = null;
    let foundArea = null;
    let zone_estimated_time = null;
    let zone_service_fee = null;
    let zone_order_minimum_amount = null;

    const { setDeliveringArea } = this.props;
    const { updateSelectedAddress } = this.props;
    const { setSelectedEstablishment } = this.props;

    var foundAddress = this.props.addressList.find(function (address) {
      return address.name == e.currentTarget.value;
    });

    let foundAreaInZones = this.props.zones.map((zone) =>
      zone.areas.map(function (area) {
        if (area.id == foundAddress.area.id) {
          foundZone = zone;
          foundArea = area;
          zone_estimated_time = zone.estimated_time;
          zone_service_fee = zone.service_fee;
          zone_order_minimum_amount = zone.order_minimum_amount;
        }
      })
    );

    if (foundArea) {
      setDeliveringArea(
        foundArea,
        true,
        zone_estimated_time,
        zone_service_fee,
        zone_order_minimum_amount
      );
      updateSelectedAddress(foundAddress, true, option);
      setSelectedEstablishment(foundZone.establishment);
      this.setState({
        selectedAddressMessage: "",
        selectedAddress: foundAddress,
      });
    } else {
      this.setState({
        selectedAddressMessage: "Cannot deliever to this area",
        selectedAddress: foundAddress,
      });

      updateSelectedAddress(null, true, option);
    }
  };

  checkAddressOnMount = (selectedAddress) => {
    const option = "Delivery";
    let foundArea = null;
    let zone_estimated_time = null;
    let zone_service_fee = null;
    let zone_order_minimum_amount = null;
    let foundAreaInZones = null;

    const { setDeliveringArea } = this.props;
    const { updateSelectedAddress } = this.props;

    foundAreaInZones = this.props.zones.map((zone) =>
      zone.areas.map(function (area) {
        if (area.id == selectedAddress.area.id) {
          foundArea = area;
          zone_estimated_time = zone.estimated_time;
          zone_service_fee = zone.service_fee;
          zone_order_minimum_amount = zone.order_minimum_amount;
        }
      })
    );

    if (foundArea) {
      setDeliveringArea(
        foundArea,
        true,
        zone_estimated_time,
        zone_service_fee,
        zone_order_minimum_amount
      );
      updateSelectedAddress(selectedAddress, true, option);
      this.setState({
        selectedAddressMessage: "",
        selectedAddress: selectedAddress,
      });
    } else {
      this.setState({
        selectedAddressMessage: "Cannot deliever to this area",
      });
      updateSelectedAddress(null, true, option);
    }
  };

  handleChoosePickup = (event) => {
    const { updateSelectedAddress } = this.props;
    const { setSelectedEstablishment } = this.props;
    var option = "Pickup";

    let chosenArea = JSON.parse(event.currentTarget.value);
    let foundEstablishment = this.props.mainEstablishment.establishments.find(
      (establishment) => establishment.branch.id == chosenArea.id
    );

    updateSelectedAddress(foundEstablishment.branch, true, option);
    setSelectedEstablishment(foundEstablishment);
  };

  handleClick = (selectedAddress, orderList, totalPrice) => {
    this.createOrder(selectedAddress, orderList, totalPrice);
  };

  handleEditAddress = () => {
    this.setState({ editAddress: true });
  };

  checkoutPayment = (data) => {
    var csrftoken = this.getCookie("csrftoken");
    const { setOrder } = this.props;
    const { history } = this.props;

    if (this.props.user) {
      var postedData = {
        data: data,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        amount: data.order.raw_data.total_price,
        currency: "KWD",
        phone_country_code: "+965",
        phone_number: this.props.profile.phone_number,
        payment_method: this.state.paymentMethod,
      };
    } else {
      var postedData = {
        data: data,
        first_name: this.props.guest.first_name,
        last_name: this.props.guest.last_name,
        email: this.props.guest.email,
        amount: data.order.raw_data.total_price,
        currency: "KWD",
        phone_country_code: "+965",
        phone_number: this.props.guest.phone_number,
        payment_method: this.state.paymentMethod,
      };
    }

    axios({
      method: "post",
      url: api.CHECKOUT_PAYMENT,
      data: postedData,
      headers: {
        "X-CSRFToken": csrftoken,
      },
    })
      .then(
        function (response) {
          if (response.status == 201) {
            window.location.replace(response.data.url);
            setOrder(response.data.order);
          } else {
            setOrder(response.data);
            history.push(slugs.ORDER_DISCONFIRM);
            // history.push({
            //   pathname: slugs.ORDER_DISCONFIRM,
            //   search: "?",
            //   state: null,
            // });
          }
        }.bind(this)
      )
      .catch((error) => {
        console.log("error", error);
      });
  };

  createTimeOptionsComponent = (minTime, maxTime) => {
    let timeOptions = [];

    let minTimeHours = minTime.slice(0, 2);
    let minTimeMinutes = minTime.slice(3, 5);
    let maxTimeHours = maxTime.slice(0, 2);
    let maxTimeMinutes = maxTime.slice(3, 5);

    let minDate = new Date();
    let dateRange1 = new Date();
    let dateRange2 = new Date();
    let maxDate = new Date();

    minDate.setHours(minTimeHours, minTimeMinutes, 0);
    minDate.setMinutes(minDate.getMinutes() + 30);
    minDate.setMinutes(0);
    maxDate.setHours(maxTimeHours, maxTimeMinutes, 0);

    let diff = maxDate.getHours() - minDate.getHours();

    for (let i = 0; i < diff; i++) {
      dateRange1.setHours(minDate.getHours() + i);
      dateRange2.setHours(minDate.getHours() + (i + 1));

      let dateRange1ampm = dateRange1.getHours() >= 12 ? " pm" : " am";
      let dateRange1Hours = dateRange1.getHours() % 12;
      dateRange1Hours = dateRange1Hours ? dateRange1Hours : 12;
      let dateRange1Format = dateRange1Hours + ":00" + dateRange1ampm;

      let dateRange2ampm = dateRange2.getHours() >= 12 ? " pm" : " am";
      let dateRange2Hours = dateRange2.getHours() % 12;
      dateRange2Hours = dateRange2Hours ? dateRange2Hours : 12;
      let dateRange2Format = dateRange2Hours + ":00" + dateRange2ampm;

      let maxDateampm = maxDate.getHours() >= 12 ? " pm" : " am";
      let maxDateHours = maxDate.getHours() % 12;
      maxDateHours = maxDateHours ? maxDateHours : 12;
      let maxDateFormat =
        maxDateHours + ":" + maxDate.getMinutes() + maxDateampm;

      let jsonData = {};

      if (maxDate.getHours() - dateRange2.getHours() === 0) {
        if (maxDate.getMinutes() - dateRange2.getMinutes() === 0) {
          jsonData = {
            dateRange1Format: dateRange1Format,
            dateRange2Format: dateRange2Format,
          };
          timeOptions.push(
            <option key={i} value={JSON.stringify(jsonData)}>
              {dateRange1Format} - {dateRange2Format}
            </option>
          );
        } else {
          jsonData = {
            dateRange1Format: dateRange1Format,
            dateRange2Format: dateRange2Format,
          };
          timeOptions.push(
            <option key={i} value={JSON.stringify(jsonData)}>
              {dateRange1Format} - {dateRange2Format}
            </option>
          );

          jsonData = {
            dateRange1Format: dateRange1Format,
            dateRange2Format: maxDateFormat,
          };
          timeOptions.push(
            <option key={i} value={JSON.stringify(jsonData)}>
              {dateRange2Format} - {maxDateFormat}
            </option>
          );
        }
      } else {
        jsonData = {
          dateRange1Format: dateRange1Format,
          dateRange2Format: dateRange2Format,
        };
        timeOptions.push(
          <option key={i} value={JSON.stringify(jsonData)}>
            {dateRange1Format} - {dateRange2Format}
          </option>
        );
      }
    }

    this.setState({ timeOptionsComponent: timeOptions });
  };

  render() {
    const establishment = this.props.establishment;
    const mainEstablishment = this.props.mainEstablishment;
    if (!this.props.orderingStatus) {
      return <Redirect to={slugs.HOMEPAGE} />;
    }
    var totalPrice = 0.0;
    var serviceFee = 0.0;
    var selectedDate = this.state.selectedDate;

    const selectedTime = this.state.selectedTime;
    const ExampleCustomInput = ({ value, onClick }) => (
      <button
        className="btn btn-primary"
        style={{ color: "black", backgroundColor: "white" }}
        onClick={onClick}
      >
        {value}
      </button>
    );
    var estimated_time = 0;
    if (establishment) {
      if (establishment.estimated_time) {
        estimated_time = establishment.estimated_time;
      }
      if (this.props.serviceFee && this.props.diningOption == "Delivery") {
        serviceFee = this.props.serviceFee;
        totalPrice = (
          parseFloat(this.props.totalPrice) + parseFloat(serviceFee)
        ).toFixed(3);
      } else {
        totalPrice = this.props.totalPrice;
      }
    }

    const selectedAddress = this.props.selectedAddress;

    const orderList = this.props.cart.filter((product) => {
      return `${product}`;
    });

    const dropdownAddressList = this.props.addressList.map((address, i) => (
      <option key={i}>{address.name}</option>
    ));

    let dropdownPickupList = [];
    if (this.props.mainEstablishment) {
      dropdownPickupList = this.props.mainEstablishment.establishments.map(
        (establishment, i) => (
          <option key={i} value={JSON.stringify(establishment.branch)}>
            {establishment.branch.area.name}
          </option>
        )
      );
    }

    const cartComp = this.props.cart.map((product, i) => (
      <div className="row mb-1" key={i}>
        <div className="col pl-4 pr-0 py-1 m-0 text-left">
          <div className=" row">
            <p className="mb-1 col-9">
              <span>{product.quantity} </span>
              {product.name}
            </p>
            <p className="mb-1">
              <span style={{ fontSize: "small" }}>
                <strong className="text-success ">
                  {(product.productTotalPrice * product.quantity).toFixed(3)}
                  KD
                </strong>
              </span>
            </p>
          </div>

          <div>
            <div>
              <div>
                {product.modifier_classes.map((modifier_class, i) => (
                  <div key={i}>
                    {modifier_class.modifiers.map((modifier, i) => (
                      <div key={i} className="row">
                        <div className="col-9">
                          {modifier.quantity ? (
                            <div className="row m-0 p-0 text-muted small">
                              <div className="col-2 p-0 text-center">
                                &nbsp;{modifier.quantity}x
                              </div>
                              <div className="col-10 p-0">{modifier.name}</div>
                            </div>
                          ) : (
                            <div className="row m-0 p-0">
                              <div className="col-2 p-0"></div>
                              <div className="col-10 p-0">{modifier.name}</div>
                            </div>
                          )}
                        </div>
                        <div className="col-2 p-0">
                          {parseFloat(modifier.price) > 0
                            ? [
                                modifier.total ? (
                                  <div className="mb-0 text-muted small">
                                    {modifier.total}
                                    KD
                                  </div>
                                ) : (
                                  <div className="mb-0 text-muted small">
                                    {modifier.price}
                                    KD
                                  </div>
                                ),
                              ]
                            : null}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {product.notes ? (
                <p className="mb-2 text-muted small">* {product.notes}</p>
              ) : null}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <Navbar />

        <main className="flex-shrink-0 main-container pb-0 ">
          <div className="mb-5 ">
            <div className="container h-100 ">
              <div className="row h-100 h-sm-auto">
                <div className="col-12 col-md-6 mx-auto align-self-center text-center">
                  <div
                    className="card  list-cart border-0 shadow-light mb-4"
                    style={{ paddingTop: "55px" }}
                  >
                    <h2 className="py-3">Order Details</h2>
                    <br></br>
                    <div className="  border-0  mb-0">
                      <div className="card-body position-relative py-0">
                        {this.props.user && this.props.profile ? (
                          <div className="media">
                            <div className="media-body text-left">
                              <h6 className="mb-1">
                                Name: {this.props.user.first_name}{" "}
                                {this.props.user.last_name}
                              </h6>
                            </div>
                            <div className="text-right">
                              <p className="mb1">
                                {this.props.profile.phone_number}
                              </p>
                              <p className="small text-mute">
                                <br></br>
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div>
                            {this.props.guest ? (
                              <div className="media">
                                <div className="media-body text-left">
                                  <h6 className="mb-1">
                                    {this.props.guest.first_name}{" "}
                                    {this.props.guest.last_name}
                                  </h6>
                                </div>
                                <div className="text-right">
                                  <p className="mb-1">
                                    +965 {this.props.guest.phone_number}
                                  </p>
                                  <p className="small text-mute">
                                    <br></br>
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        )}

                        <div>
                          <hr></hr>
                          <div className="row address-part">
                            {this.props.diningOption == "Delivery" ? (
                              <>
                                <div className="col text-left">
                                  <p>
                                    Estimated Delivery Time:{" "}
                                    {this.props.estimatedTime} mins
                                  </p>
                                </div>
                                <div className="col-auto">
                                  <i className="material-icons">schedule</i>
                                  <button className="btn t "></button>
                                </div>
                              </>
                            ) : null}
                          </div>
                        </div>
                        <br></br>
                        <hr></hr>

                        {this.state.selectedAddress ? (
                          <div style={{ height: "70px" }}>
                            <div className="row address-part">
                              <div className="col text-left">
                                {this.props.diningOption == "Delivery" ? (
                                  <p className="">
                                    {this.props.diningOption} to: {"  "}
                                    {this.state.selectedAddress.area.name} -
                                    Block:
                                    {this.state.selectedAddress.block} - Street:{" "}
                                    {this.state.selectedAddress.street} -
                                    Building:{" "}
                                    {this.state.selectedAddress.building} -
                                    Floor: {this.state.selectedAddress.floor}
                                  </p>
                                ) : (
                                  <p className="">
                                    {this.props.diningOption} from: {"  "}
                                    {this.props.selectedAddress.area.name} -
                                    Block:
                                    {this.props.selectedAddress.block} - Street:{" "}
                                    {this.props.selectedAddress.street}
                                  </p>
                                )}
                              </div>
                              <div className="col-auto">
                                <button className="btn t ">
                                  <i className="material-icons">place</i>
                                </button>
                              </div>
                            </div>
                            <div>
                              {" "}
                              <p
                                className="form-label"
                                style={{ color: "red" }}
                              >
                                {this.state.selectedAddressMessage}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div style={{ height: "70px" }}></div>
                        )}

                        <br></br>
                        {this.props.user ? (
                          <div className="">
                            <div className="">
                              {mainEstablishment.pickup_ordering ? (
                                <>
                                  <input
                                    type="radio"
                                    name="Pickup"
                                    id="exampleRadiosPickup1"
                                    value="Pickup"
                                    checked={
                                      mainEstablishment.delivery_ordering ==
                                      false
                                        ? true
                                        : this.state.pickupDining
                                    }
                                    onChange={this.handleChangeDining}
                                  ></input>
                                  <label
                                    htmlFor="exampleRadiosPickup1"
                                    className="tab-label"
                                  >
                                    Pickup
                                  </label>
                                </>
                              ) : null}
                              {mainEstablishment.delivery_ordering ? (
                                <>
                                  <input
                                    type="radio"
                                    name="Delivery"
                                    id="exampleRadiosDelivery1"
                                    value="Delivery"
                                    checked={
                                      mainEstablishment.pickup_ordering == false
                                        ? true
                                        : this.state.deliveryDining
                                    }
                                    onChange={this.handleChangeDining}
                                  ></input>
                                  <label
                                    htmlFor="exampleRadiosDelivery1"
                                    className="tab-label"
                                  >
                                    Delivery
                                  </label>
                                </>
                              ) : null}
                            </div>

                            <div className="paymentFlex">
                              {this.state.deliveryDining ? (
                                <div>
                                  <br></br>
                                  <div className="d-flex justify-content-center">
                                    <div
                                      className="form-group"
                                      style={{ width: "20rem" }}
                                    >
                                      <div>
                                        <select
                                          className="form-control"
                                          id="address"
                                          name="address"
                                          placeholder="choose.."
                                          onChange={this.handleChooseDelivery}
                                        >
                                          {selectedAddress ? (
                                            <option defaultValue>
                                              Chosen: {selectedAddress.name}
                                            </option>
                                          ) : (
                                            <option defaultValue>
                                              Choose from my addresses
                                            </option>
                                          )}
                                          {dropdownAddressList}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <Link
                                      to={slugs.ADDRESS}
                                      className=""
                                      style={{ textDecoration: "none" }}
                                    >
                                      <i
                                        className="fa fa-plus fa-lg"
                                        style={{ color: "var(--bg-color)" }}
                                      ></i>{" "}
                                      New Address
                                    </Link>
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  {this.state.pickupDining ? (
                                    <div>
                                      <br></br>
                                      <div className="d-flex justify-content-center">
                                        <div
                                          className="form-group"
                                          style={{ width: "20rem" }}
                                        >
                                          <div>
                                            <select
                                              className="form-control"
                                              id="address"
                                              name="address"
                                              placeholder="choose.."
                                              onChange={this.handleChoosePickup}
                                            >
                                              {selectedAddress ? (
                                                <option defaultValue>
                                                  Chosen:{" "}
                                                  {selectedAddress.area.name}
                                                </option>
                                              ) : (
                                                <option defaultValue>
                                                  Choose pickup area
                                                </option>
                                              )}
                                              {dropdownPickupList}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div></div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}

                        <br></br>
                      </div>
                    </div>

                    <div className="shadow-light">
                      <h4 className="py-3">Items</h4>
                      <div className="card border-0  mb-1">
                        <div className="card-body">{cartComp}</div>
                      </div>

                      <br></br>
                      <div className="">
                        <div className="card border-0 shadow-light mb-4">
                          <div className="card-body">
                            <ul className="list-group list-group-flush">
                              {this.props.diningOption == "Pickup" ? (
                                <li
                                  className="list-group-item"
                                  style={{ textAlign: "-webkit-auto" }}
                                >
                                  <span className=" font-weight-bold">
                                    Total
                                  </span>{" "}
                                  <span className="float-right font-weight-bold">
                                    {this.props.totalPrice}KD
                                  </span>
                                </li>
                              ) : (
                                <div>
                                  <li
                                    className="list-group-item"
                                    style={{ textAlign: "-webkit-auto" }}
                                  >
                                    <span>Sub Total</span>{" "}
                                    <span className="float-right font-weight-bold">
                                      {this.props.totalPrice}KD
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item"
                                    style={{ textAlign: "-webkit-auto" }}
                                  >
                                    <span>Delivery Charge</span>{" "}
                                    <span className="float-right font-weight-bold">
                                      {serviceFee}KD
                                    </span>
                                  </li>
                                  <li
                                    className="list-group-item"
                                    style={{ textAlign: "-webkit-auto" }}
                                  >
                                    <span className=" font-weight-bold">
                                      Total
                                    </span>{" "}
                                    <span className="float-right font-weight-bold">
                                      {totalPrice}KD
                                    </span>
                                  </li>
                                </div>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card m-2 mt-4 mb-4">
                        <div className="card-body p-0">
                          <textarea
                            className="form-control border-0"
                            rows="3"
                            placeholder="Note.."
                            onChange={this.handleChangeNotes}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    {/* FUTURE ORDER */}
                    {this.state.renderFutureOrders &&
                    this.state.renderFutureOrdersForDays ? (
                      <div className="paymentFlex">
                        <h5 className="title1">
                          {this.props.diningOption} Time
                        </h5>
                        <br></br>
                        <div
                          className="row"
                          style={{ justifyContent: "center" }}
                        >
                          <div
                            className="col-"
                            style={{ paddingRight: "40px" }}
                          >
                            {/* <label>Date: </label> */}

                            <DatePicker
                              dateFormat={"EEEE, dd-MM-yyyy"}
                              selected={this.state.selectedDate}
                              minDate={this.state.minDate}
                              // style={{
                              //   marginLeft: "-90px",
                              //   textAlign: "right",
                              // }}
                              onChange={this.handleChangeCalendar}
                              customInput={<ExampleCustomInput />}
                              // showTimeSelect
                              // minTime={selectedTime}
                              // maxTime={selectedTime}
                            />
                          </div>

                          <div className="col-">
                            {/* <label htmlFor="myTime">Estimated Time:</label> */}

                            {/* <input
                              type="time"
                              name="myTime"
                              id="myTime"
                              className="btn btn-primary"
                              defaultValue={selectedTime}
                              onChange={this.handleChangeTime}
                            ></input> */}
                            {/* {this.state.timePickerComponent ? (
                              <div>
                                {selectedTime ? (
                                  <ReactTimePicker
                                    value={selectedTime}
                                    minTime={this.state.minTime}
                                    maxTime={this.state.maxTime}
                                    step={60}
                                    onChange={this.handleChangeTime}
                                    allowOnlySuggestions
                                    className="future-order-time-input"
                                  />
                                ) : (
                                  <div></div>
                                )}
                              </div>
                            ) : null} */}

                            {/* {this.state.otherTimePickerComponent ? (
                              <div>
                                {selectedTime ? (
                                  <ReactTimePicker
                                    value={selectedTime}
                                    minTime={this.state.minTime}
                                    maxTime={this.state.maxTime}
                                    step={60}
                                    onChange={this.handleChangeTime}
                                    allowOnlySuggestions
                                    className="future-order-time-input"
                                  />
                                ) : (
                                  <div></div>
                                )}
                              </div>
                            ) : null} */}

                            <select
                              className="future-order-time-input"
                              id="timeOptions"
                              name="timeOptions"
                              onChange={this.handleChangeTime}
                            >
                              {this.state.timeOptionsComponent}
                            </select>
                          </div>
                        </div>
                      </div>
                    ) : (
                      [
                        this.state.renderFutureOrders &&
                        !this.state.renderFutureOrdersForDays ? (
                          <div className="paymentFlex">
                            <h5 className="title1">
                              {this.props.diningOption} Time
                            </h5>
                            <br></br>
                            <div
                              className="row"
                              style={{ justifyContent: "center" }}
                            >
                              <div className="col-2"></div>

                              <div className="col-6">
                                <div>
                                  {selectedTime ? (
                                    // <ReactTimePicker
                                    //   value={selectedTime}
                                    //   minTime={this.state.minTime}
                                    //   maxTime={this.state.maxTime}
                                    //   step={60}
                                    //   onChange={this.handleChangeTime}
                                    //   allowOnlySuggestions
                                    //   className="future-order-time-input"
                                    // />
                                    // <select
                                    //   className="future-order-time-input"
                                    //   id="timeOptions"
                                    //   name="timeOptions"
                                    //   onChange={this.handleChangeTime}
                                    // >
                                    //   {timeOptions}
                                    // </select>
                                    <></>
                                  ) : (
                                    <div></div>
                                  )}
                                </div>
                              </div>
                              <div className="col-2"></div>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        ),
                      ]
                    )}

                    <br></br>
                    <h4 className="py-3">Payment method</h4>

                    <div className="">
                      {this.props.mainEstablishment.cash_payment &&
                      this.props.mainEstablishment.knet_payment ? (
                        <>
                          <div className="row p-0 mx-3">
                            <div
                              className="col-8"
                              style={{ textAlign: "left" }}
                            >
                              <input
                                type="radio"
                                name="Cash"
                                id="Cash"
                                value="Cash"
                                checked={
                                  this.state.paymentMethod == "Cash"
                                    ? true
                                    : false
                                }
                                onChange={this.handleChangePayment}
                              ></input>
                              <label htmlFor="Cash">Cash</label>
                            </div>
                            <div className="col-4">
                              <img
                                src="../../../static/img/cash.png"
                                alt="Cash"
                                style={{ height: 28 }}
                              ></img>
                            </div>
                          </div>
                          <br></br>
                          <div className="row p-0 mx-3">
                            <div
                              className="col-8"
                              style={{ textAlign: "left" }}
                            >
                              <input
                                type="radio"
                                name="Card"
                                id="Card"
                                value="Card"
                                checked={
                                  this.state.paymentMethod == "Card"
                                    ? true
                                    : false
                                }
                                onChange={this.handleChangePayment}
                              ></input>
                              <label htmlFor="Card">K-net / Credit Card</label>
                            </div>
                            <div className="col-4">
                              <img
                                src="../../../static/img/all.png"
                                alt="All"
                                style={{ height: 20 }}
                              ></img>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {this.props.mainEstablishment.cash_payment &&
                      !this.props.mainEstablishment.knet_payment ? (
                        <div className="row p-0 mx-3">
                          <div className="col-8" style={{ textAlign: "left" }}>
                            <input
                              type="radio"
                              name="Cash"
                              id="Cash"
                              value="Cash"
                              checked={true}
                              onChange={this.handleChangePayment}
                            ></input>
                            <label htmlFor="Cash">Cash</label>
                          </div>
                          <div className="col-4">
                            <img
                              src="../../../static/img/cash.png"
                              alt="Cash"
                              style={{ height: 28 }}
                            ></img>
                          </div>
                        </div>
                      ) : null}
                      {!this.props.mainEstablishment.cash_payment &&
                      this.props.mainEstablishment.knet_payment ? (
                        <div className="row p-0 mx-3">
                          <div className="col-8" style={{ textAlign: "left" }}>
                            <input
                              type="radio"
                              name="Card"
                              id="Card"
                              value="Card"
                              checked={true}
                              onChange={this.handleChangePayment}
                            ></input>
                            <label htmlFor="Card">K-net / Credit Card</label>
                          </div>
                          <div className="col-4">
                            <img
                              src="../../../static/img/all.png"
                              alt="All"
                              style={{ height: 20 }}
                            ></img>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <br></br>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <h6 style={{ color: "red" }}>{this.state.message}</h6>
                    </div>
                    <br></br>
                    <button
                      data-toggle="modal"
                      data-target="#select-login"
                      className=" btn btn-lg btn-default default-shadow btn-block"
                      onClick={() =>
                        this.handleClick(selectedAddress, orderList, totalPrice)
                      }
                    >
                      Place Order{" "}
                      <span className="ml-2 icon arrow_right"></span>
                    </button>

                    <br></br>
                    <br></br>
                    {this.state.style ? (
                      <div
                        className={this.state.style}
                        style={{ zIndex: "1000" }}
                      >
                        <h4 style={{ color: "white", fontSize: "2rem" }}>
                          PROCESSING . . .
                        </h4>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderingStatus: state.addressReducer.orderingStatus,
    cart: state.productReducer.cart,
    mainEstablishment: state.productReducer.mainEstablishment,
    establishment: state.productReducer.establishment,
    selectedEstablishment: state.productReducer.selectedEstablishment,
    selectedAddress: state.addressReducer.selectedAddress,
    deliveringArea: state.addressReducer.deliveringArea,
    addressList: state.addressReducer.addressList,
    diningOption: state.addressReducer.diningOption,
    profile: state.profileReducer.profile,
    totalPrice: state.productReducer.totalPrice,
    user: state.userReducer.user,
    token: state.userReducer.token,
    guest: state.userReducer.guest,
    serviceFee: state.addressReducer.serviceFee,
    estimatedTime: state.addressReducer.estimatedTime,
    order_minimum_amount: state.addressReducer.order_minimum_amount,
    zones: state.adminReducer.zones,
    workingHours: state.adminReducer.workingHours,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAddress: (data) => dispatch(actionCreators.getAddress(data)),
  updateSelectedAddress: (data, status, option) =>
    dispatch(actionCreators.updateSelectedAddress(data, status, option)),
  setOrder: (data) => dispatch(actionCreators.setOrder(data)),
  resetAddress: () => dispatch(actionCreators.resetAddress()),
  setDeliveringArea: (
    data,
    status,
    estimated_time,
    service_fee,
    order_minimum_amount
  ) =>
    dispatch(
      actionCreators.setDeliveringArea(
        data,
        status,
        estimated_time,
        service_fee,
        order_minimum_amount
      )
    ),
  setTotalPrice: (data) => dispatch(actionCreators.setTotalPrice(data)),
  setSelectedEstablishment: (data) =>
    dispatch(actionCreators.setSelectedEstablishment(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Checkout));
