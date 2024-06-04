import PropTypes from "prop-types";
import "./NaverCafeSidebar1.css";

const NaverCafeSidebar = ({ className = "", onCafeWritingButtonClick }) => {
  return (
    <div className={`ncafe-navercafesidebar1 ${className}`}>
      <div className="ncafe-cafeinformation1">
        <b className="ncafe-b26">카페 정보</b>
      </div>
      <div className="ncafe-cafeintroduction1">
        <button
          className="ncafe-cafewritingbutton1"
          onClick={onCafeWritingButtonClick}
        >
          <div className="ncafe-cafewritingbutton-item" />
          <b className="ncafe-b27">카페 글쓰기</b>
        </button>
        <div className="ncafe-caferankandmember1">
          <div className="ncafe-container">
            <b className="ncafe-b28">50</b>
            <img
              className="ncafe-ico-member-1-icon1"
              alt=""
              src="/community/naverCafeWeb/ico-member-1.svg"
            />
          </div>
          <div className="ncafe-group-div">
            <b className="ncafe-b29">숲 등급</b>
            <img
              className="ncafe-group-item"
              alt=""
              src="/community/naverCafeWeb/iconforest.png"
            />
          </div>
        </div>
        <div className="ncafe-cafemanager1">
          <img
            className="ncafe-cafemanager-item"
            alt=""
            src="/community/naverCafeWeb/rectangle-15@2x.png"
          />
          <b className="ncafe-b30">디지털도우미</b>
          <div className="ncafe-managericon1">
            <div className="ncafe-managericon-item" />
            <div className="ncafe-div43">매니저</div>
          </div>
          <div className="ncafe-div44">2024.06.19 개설</div>
          <div className="ncafe-div45">카페소개</div>
        </div>
      </div>
      <div className="ncafe-browsingtext1">
        <b className="ncafe-b31">둘러보기</b>
      </div>
      <div className="ncafe-cafesidebarlistcomponent3">
        <div className="ncafe-sidebarlist3">
          <div className="ncafe-culturee1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">문화</div>
          </div>
          <div className="ncafe-medicall1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">의료</div>
          </div>
          <div className="ncafe-financee2">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">금융</div>
          </div>
          <div className="ncafe-welfaree1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">복지</div>
          </div>
          <div className="ncafe-employmentt1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">취업</div>
          </div>
        </div>
        <div className="ncafe-sortframe3">
          <b className="ncafe-b32">정보제공</b>
        </div>
      </div>
      <div className="ncafe-cafesidebarlistcomponent4">
        <div className="ncafe-sortframe4">
          <b className="ncafe-b32">앱 가이드</b>
        </div>
        <div className="ncafe-sidebarlist4">
          <div className="ncafe-culturee1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">기차 예매</div>
          </div>
          <div className="ncafe-medicall1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">배달 어플</div>
          </div>
          <div className="ncafe-financee2">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">검색 어플</div>
          </div>
          <div className="ncafe-welfaree1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">쇼핑 어플</div>
          </div>
          <div className="ncafe-employmentt1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">행정서비스</div>
          </div>
          <div className="ncafe-stargramm1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">별스타그램</div>
          </div>
          <div className="ncafe-taxii1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">택시 어플</div>
          </div>
          <div className="ncafe-financee3">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">금융 어플</div>
          </div>
          <div className="ncafe-mapp1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">지도 어플</div>
          </div>
          <div className="ncafe-meetingg1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">모임 어플</div>
          </div>
        </div>
      </div>
      <div className="ncafe-cafesidebarlistcomponent5">
        <div className="ncafe-sortframe4">
          <b className="ncafe-b32">전자기기 가이드</b>
        </div>
        <div className="ncafe-sidebarlist5">
          <div className="ncafe-culturee1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">키오스크</div>
          </div>
          <div className="ncafe-medicall1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">스마트워치</div>
          </div>
          <div className="ncafe-financee2">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">구글 크롬</div>
          </div>
          <div className="ncafe-welfaree1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">무선이어폰</div>
          </div>
          <div className="ncafe-employmentt1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">스마트TV</div>
          </div>
          <div className="ncafe-stargramm1">
            <img
              className="ncafe-rifile-list-line-icon21"
              alt=""
              src="/community/naverCafeWeb/rifilelistline.svg"
            />
            <div className="ncafe-div46">스마트폰</div>
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
