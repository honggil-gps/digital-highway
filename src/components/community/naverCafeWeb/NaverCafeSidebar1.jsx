import PropTypes from "prop-types";
import "./NaverCafeSidebar1.css";

const NaverCafeSidebar = ({ className = "", onCafeWritingButtonClick }) => {
  return (
    <div className={`navercafesidebar1 ${className}`}>
      <div className="cafeinformation1">
        <b className="b26">카페 정보</b>
      </div>
      <div className="cafeintroduction1">
        <button
          className="cafewritingbutton1"
          onClick={onCafeWritingButtonClick}
        >
          <div className="cafewritingbutton-item" />
          <b className="b27">카페 글쓰기</b>
        </button>
        <div className="caferankandmember1">
          <div className="container">
            <b className="b28">50</b>
            <img
              className="ico-member-1-icon1"
              alt=""
              src="/community/naverCafeWeb/ico-member-1.svg"
            />
          </div>
          <div className="group-div">
            <b className="b29">숲 등급</b>
            <img
              className="group-item"
              alt=""
              src="/community/naverCafeWeb/iconforest.png"
            />
          </div>
        </div>
        <div className="cafemanager1">
          <img
            className="cafemanager-item"
            alt=""
            src="/community/naverCafeWeb/rectangle-15@2x.png"
          />
          <b className="b30">디지털도우미</b>
          <div className="managericon1">
            <div className="managericon-item" />
            <div className="div43">매니저</div>
          </div>
          <div className="div44">2024.06.19 개설</div>
          <div className="div45">카페소개</div>
        </div>
      </div>
      <div className="browsingtext1">
        <b className="b31">둘러보기</b>
      </div>
      <div className="cafesidebarlistcomponent3">
        <div className="sidebarlist3">
          <div className="culturee1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">문화</div>
          </div>
          <div className="medicall1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">의료</div>
          </div>
          <div className="financee2">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">금융</div>
          </div>
          <div className="welfaree1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">복지</div>
          </div>
          <div className="employmentt1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">취업</div>
          </div>
        </div>
        <div className="sortframe3">
          <b className="b32">정보제공</b>
        </div>
      </div>
      <div className="cafesidebarlistcomponent4">
        <div className="sortframe4">
          <b className="b32">앱 가이드</b>
        </div>
        <div className="sidebarlist4">
          <div className="culturee1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">기차 예매</div>
          </div>
          <div className="medicall1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">배달 어플</div>
          </div>
          <div className="financee2">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">검색 어플</div>
          </div>
          <div className="welfaree1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">쇼핑 어플</div>
          </div>
          <div className="employmentt1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">행정서비스</div>
          </div>
          <div className="stargramm1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">별스타그램</div>
          </div>
          <div className="taxii1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">택시 어플</div>
          </div>
          <div className="financee3">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">금융 어플</div>
          </div>
          <div className="mapp1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">지도 어플</div>
          </div>
          <div className="meetingg1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">모임 어플</div>
          </div>
        </div>
      </div>
      <div className="cafesidebarlistcomponent5">
        <div className="sortframe4">
          <b className="b32">전자기기 가이드</b>
        </div>
        <div className="sidebarlist5">
          <div className="culturee1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">키오스크</div>
          </div>
          <div className="medicall1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">스마트워치</div>
          </div>
          <div className="financee2">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">구글 크롬</div>
          </div>
          <div className="welfaree1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">무선이어폰</div>
          </div>
          <div className="employmentt1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">스마트TV</div>
          </div>
          <div className="stargramm1">
            <img
              className="rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="div46">스마트폰</div>
          </div>
        </div>
      </div>
    </div>
  );
};

NaverCafeSidebar.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onCafeWritingButtonClick: PropTypes.func,
};

export default NaverCafeSidebar;
