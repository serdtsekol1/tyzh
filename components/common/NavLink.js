import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

NavLink.defaultProps = {
  exact: false
};

function NavLink({ to, children, className, activeStyle, ...props }) {
  const { asPath } = useRouter();

  let isActive = false;

  if(asPath === to || asPath.startsWith(to))
    isActive = true;

  if (isActive) {
    className += ' active';
  }

  return (
    <Link href={to}>
      <a {...props} className={className} style={isActive ? activeStyle : null}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;