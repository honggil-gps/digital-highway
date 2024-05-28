import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./JoinPage.css";

const JoinPage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/joincomplete-12");
  }, [navigate]);

  return (
    <div className="never-joinpage-11">
      <img
        className="never-logoframe-icon"
        alt=""
        src="/appguide/never/logoframe.svg"
      />
      <div className="never-joinpagecontainer">
        <div className="never-joinpagecontents">
          <div className="never-idandpw1">
            <div className="never-joininput">
              <div className="never-joininput-child" />
              <input className="never-input1" placeholder="아이디" type="text" />
            </div>
            <div className="never-pwinput">
              <input className="never-input2" placeholder="비밀번호" type="text" />
            </div>
            <div className="never-pwinput">
              <input className="never-input3" placeholder="이메일주소" type="text" />
            </div>
          </div>
          <div className="never-nameandgenderbox">
            <div className="never-nameandbirth">
              <div className="never-pwinput">
                <input className="never-input4" placeholder="이름" type="text" />
              </div>
              <div className="never-pwinput">
                <input
                  className="never-input3"
                  placeholder="생년월일 8자리"
                  type="text"
                />
              </div>
              <FormControl
                className="never-mobilecarrier"
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "366px",
                  height: "48px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "48px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "48px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "48px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "48px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary">통신사 선택</InputLabel>
                <Select
                  color="primary"
                  name="MobileCarrier"
                  label="통신사 선택"
                  disableUnderline
                  displayEmpty
                >
                  <MenuItem value="KT">KT</MenuItem>
                  <MenuItem value="SKT">SKT</MenuItem>
                  <MenuItem value="LG U+">LG U+</MenuItem>
                  <MenuItem value="알뜰폰KT">알뜰폰KT</MenuItem>
                  <MenuItem value="알뜰폰SKT">알뜰폰SKT</MenuItem>
                  <MenuItem value="알뜰폰LG U+">알뜰폰LG U+</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="never-genderforeigner">
              <div className="never-genderframe">
                <div className="never-man">
                  <div className="never-man-child" />
                  <div className="never-div59">남자</div>
                </div>
                <div className="never-woman">
                  <div className="never-man-child" />
                  <div className="never-div59">여자</div>
                </div>
              </div>
              <div className="never-foreignerframe">
                <div className="never-woman">
                  <div className="never-man-child" />
                  <div className="never-div61">외국인</div>
                </div>
                <div className="never-man">
                  <div className="never-man-child" />
                  <div className="never-div61">내국인</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="never-phonenumframe">
          <div className="never-phonenumbox">
            <input className="never-input6" placeholder="휴대전화번호" type="text" />
          </div>
          <div className="never-fullagreementbox">
            <div className="never-frame6">
              <input className="never-ggcheck-o" type="checkbox" />
              <div className="never-div63">인증약관 전체동의</div>
            </div>
            <img
              className="never-chevron-down-icon"
              alt=""
              src="/appguide/never/chevrondown.svg"
            />
          </div>
        </div>
      </div>
      <div className="never-authenticationframe">
        <div className="never-authentication">
          <div className="never-authentication-child" onClick={onRectangleClick} />
          <div className="never-div64">인증요청</div>
        </div>
        <img
          className="never-bottombar-icon1"
          alt=""
          src="/appguide/never/bottombar.svg"
        />
      </div>
    </div>
  );
};

export default JoinPage;
