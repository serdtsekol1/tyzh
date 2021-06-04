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

function NavLink({ to, exact, children, className, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === to : pathname.startsWith(to);

  if (isActive) {
    props.className += ' active';
  }

  return (
    <Link href={to}>
      <a {...props} className={className}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;